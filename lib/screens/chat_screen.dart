import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class ChatScreen extends StatefulWidget {
  final String userId;
  final String username;

  const ChatScreen({Key? key, required this.userId, required this.username}) : super(key: key);

  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _controller = TextEditingController();
  var _enteredMessage = '';

  void _sendMessage() async {
    FocusScope.of(context).unfocus();
    final user = FirebaseAuth.instance.currentUser;
    final userData = await FirebaseFirestore.instance
        .collection('users')
        .doc(user!.uid)
        .get();
    FirebaseFirestore.instance.collection('chat').add({
      'text': _enteredMessage,
      'createdAt': Timestamp.now(),
      'userId': user.uid,
      'username': userData['username'],
    });
    _controller.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.username),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Expanded(
              child: StreamBuilder(
                stream: FirebaseFirestore.instance
                    .collection('chat')
                    .orderBy(
                      'createdAt',
                      descending: true,
                    )
                    .snapshots(),
                builder: (ctx, chatSnapshot) {
                  if (chatSnapshot.connectionState == ConnectionState.waiting) {
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  }
                  final chatDocs = chatSnapshot.data?.docs;
                  return ListView.builder(
                    reverse: true,
                    itemCount: chatDocs?.length,
                    itemBuilder: (ctx, index) => MessageBubble(
                      chatDocs?[index]['text'],
                      chatDocs?[index]['username'],
                      chatDocs?[index]['userId'] == FirebaseAuth.instance.currentUser?.uid,
                      key: ValueKey(chatDocs?[index].id),
                    ),
                  );
                },
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top: 8),
              padding: const EdgeInsets.all(8),
              child: Row(
                children: <Widget>[
                  Expanded(
                    child: TextField(
                      controller: _controller,
                      decoration: const InputDecoration(labelText: 'Send a message...'),
                      onChanged: (value) {
                        setState(() {
                          _enteredMessage = value;
                        });
                      },
                    ),
                  ),
                  IconButton(
                    color: Theme.of(context).primaryColor,
                    icon: const Icon(
                      Icons.send,
                    ),
                    onPressed: _enteredMessage.trim().isEmpty ? null : _sendMessage,
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MessageBubble extends StatelessWidget {
  final String message;
  final String username;
  final bool isMe;

  const MessageBubble(this.message, this.username, this.isMe, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
      children: <Widget>[
        Container(
          decoration: BoxDecoration(
            color: isMe ? Colors.grey[300] : Theme.of(context).accentColor,
            borderRadius: BorderRadius.only(
              topLeft: const Radius.circular(12),
              topRight: const Radius.circular(12),
              bottomLeft: !isMe ? const Radius.circular(0) : const Radius.circular(12),
              bottomRight: isMe ? const Radius.circular(0) : const Radius.circular(12),
            ),
          ),
          width: 140,
          padding: const EdgeInsets.symmetric(
            vertical: 10,
            horizontal: 16,
          ),
          margin: const EdgeInsets.symmetric(
            vertical: 4,
            horizontal: 8,
          ),
          child: Column(
            crossAxisAlignment: isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                username,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: isMe ? Colors.black : Theme.of(context).accentTextTheme.headline6?.color,
                ),
              ),
              Text(
                message,
                style: TextStyle(
                  color: isMe ? Colors.black : Theme.of(context).accentTextTheme.headline6?.color,
                ),
                textAlign: isMe ? TextAlign.end : TextAlign.start,
              ),
            ],
          ),
        ),
      ],
    );
  }
}
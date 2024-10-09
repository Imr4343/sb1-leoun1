import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_chat_app/screens/chat_screen.dart';

class ChatListScreen extends StatelessWidget {
  const ChatListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chats'),
        actions: [
          IconButton(
            icon: const Icon(Icons.exit_to_app),
            onPressed: () {
              FirebaseAuth.instance.signOut();
              Navigator.of(context).pushReplacementNamed('/');
            },
          ),
        ],
      ),
      body: StreamBuilder(
        stream: FirebaseFirestore.instance.collection('users').snapshots(),
        builder: (ctx, userSnapshot) {
          if (userSnapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          final userDocs = userSnapshot.data?.docs;
          return ListView.builder(
            itemCount: userDocs?.length,
            itemBuilder: (ctx, index) => ListTile(
              title: Text(userDocs?[index]['username']),
              onTap: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => ChatScreen(
                      userId: userDocs?[index].id,
                      username: userDocs?[index]['username'],
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}
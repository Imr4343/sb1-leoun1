import 'package:flutter/material.dart';

class PostCard extends StatelessWidget {
  final Map<String, dynamic> post;

  const PostCard({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      elevation: 5,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.vertical(top: Radius.circular(15)),
            child: Image.network(
              post['imageUrl'],
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  post['username'],
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    Icon(Icons.favorite, color: Colors.red, size: 16),
                    SizedBox(width: 4),
                    Text('${post['likes']}'),
                    SizedBox(width: 16),
                    Icon(Icons.comment, color: Colors.blue, size: 16),
                    SizedBox(width: 4),
                    Text('${post['comments']}'),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
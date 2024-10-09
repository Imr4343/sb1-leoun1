import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:connector/widgets/post_card.dart';

class FeedWidget extends StatelessWidget {
  final List<Map<String, dynamic>> dummyPosts = [
    {
      'username': 'john_doe',
      'imageUrl': 'https://picsum.photos/300/400',
      'likes': 1234,
      'comments': 56,
    },
    {
      'username': 'jane_smith',
      'imageUrl': 'https://picsum.photos/300/300',
      'likes': 5678,
      'comments': 90,
    },
    // Add more dummy posts here
  ];

  FeedWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MasonryGridView.count(
      crossAxisCount: 2,
      mainAxisSpacing: 4,
      crossAxisSpacing: 4,
      itemBuilder: (context, index) {
        return PostCard(post: dummyPosts[index % dummyPosts.length]);
      },
    );
  }
}
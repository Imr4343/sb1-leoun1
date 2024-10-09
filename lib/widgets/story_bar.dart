import 'package:flutter/material.dart';

class StoryBar extends StatelessWidget {
  const StoryBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: 10, // Replace with actual story count
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: [
                Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      colors: [
                        Theme.of(context).colorScheme.primary,
                        Theme.of(context).colorScheme.secondary,
                      ],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(2.0),
                    child: CircleAvatar(
                      backgroundImage: NetworkImage('https://picsum.photos/60'),
                    ),
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  'User $index',
                  style: TextStyle(fontSize: 12),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
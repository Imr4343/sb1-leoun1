import 'package:flutter/material.dart';
import 'package:connector/widgets/custom_app_bar.dart';
import 'package:connector/widgets/custom_bottom_nav_bar.dart';
import 'package:connector/widgets/feed_widget.dart';
import 'package:connector/widgets/story_bar.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            const CustomAppBar(),
            const StoryBar(),
            Expanded(
              child: FeedWidget(),
            ),
          ],
        ),
      ),
      bottomNavigationBar: const CustomBottomNavBar(),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // TODO: Implement content upload
        },
        child: const Icon(Icons.add),
        backgroundColor: Theme.of(context).colorScheme.secondary,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    );
  }
}
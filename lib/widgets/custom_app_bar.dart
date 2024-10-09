import 'package:flutter/material.dart';
import 'package:animated_text_kit/animated_text_kit.dart';

class CustomAppBar extends StatelessWidget {
  const CustomAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            Theme.of(context).colorScheme.primary,
            Theme.of(context).colorScheme.secondary,
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          AnimatedTextKit(
            animatedTexts: [
              WavyAnimatedText(
                'Connector',
                textStyle: Theme.of(context).textTheme.headlineMedium!.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ],
            isRepeatingAnimation: false,
          ),
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.search, color: Colors.white),
                onPressed: () {
                  // TODO: Implement search functionality
                },
              ),
              IconButton(
                icon: const Icon(Icons.notifications, color: Colors.white),
                onPressed: () {
                  // TODO: Implement notifications
                },
              ),
            ],
          ),
        ],
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_chat_app/screens/chat_list_screen.dart';

class AuthScreen extends ConsumerStatefulWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends ConsumerState<AuthScreen> {
  final _auth = FirebaseAuth.instance;
  var _isLogin = true;
  var _isLoading = false;
  final _formKey = GlobalKey<FormState>();
  String _userEmail = '';
  String _userPassword = '';

  void _trySubmit() async {
    final isValid = _formKey.currentState!.validate();
    FocusScope.of(context).unfocus();

    if (isValid) {
      _formKey.currentState!.save();
      setState(() {
        _isLoading = true;
      });

      try {
        if (_isLogin) {
          await _auth.signInWithEmailAndPassword(
            email: _userEmail,
            password: _userPassword,
          );
        } else {
          await _auth.createUserWithEmailAndPassword(
            email: _userEmail,
            password: _userPassword,
          );
        }
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (context) => const ChatListScreen()),
        );
      } catch (err) {
        print(err);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(err.toString()),
            backgroundColor: Theme.of(context).errorColor,
          ),
        );
      }

      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      body: Center(
        child: Card(
          margin: const EdgeInsets.all(20),
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    TextFormField(
                      key: const ValueKey('email'),
                      validator: (value) {
                        if (value!.isEmpty || !value.contains('@')) {
                          return 'Please enter a valid email address.';
                        }
                        return null;
                      },
                      keyboardType: TextInputType.emailAddress,
                      decoration: const InputDecoration(
                        labelText: 'Email address',
                      ),
                      onSaved: (value) {
                        _userEmail = value!;
                      },
                    ),
                    TextFormField(
                      key: const ValueKey('password'),
                      validator: (value) {
                        if (value!.isEmpty || value.length < 7) {
                          return 'Password must be at least 7 characters long.';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(labelText: 'Password'),
                      obscureText: true,
                      onSaved: (value) {
                        _userPassword = value!;
                      },
                    ),
                    const SizedBox(height: 12),
                    if (_isLoading) const CircularProgressIndicator(),
                    if (!_isLoading)
                      ElevatedButton(
                        child: Text(_isLogin ? 'Login' : 'Signup'),
                        onPressed: _trySubmit,
                      ),
                    if (!_isLoading)
                      TextButton(
                        child: Text(_isLogin
                            ? 'Create new account'
                            : 'I already have an account'),
                        onPressed: () {
                          setState(() {
                            _isLogin = !_isLogin;
                          });
                        },
                      )
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
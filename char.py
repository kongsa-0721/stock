#!/usr/bin/env python
#coding:utf-8
import os
def wordCount(s):
  chars = len(s)
  words = len(s.split())
  lines = s.count('\n')
  print lines, words, chars

s = open('./test.sh').read()
wordCount(s)
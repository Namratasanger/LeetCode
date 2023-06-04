### 242. [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

**Level:** Easy

**Problem:**
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


**Solution:**

``` javascript
  var hashSet = (anagramString) => {
      maps = {};
      for(let i = 0; i < anagramString.length; i++){
          maps[anagramString[i]] =  maps[anagramString[i]] + 1 || 1;
      }
      return maps;
  }

  var isAnagram = function(s, t) {
      sMaps = hashSet(s);
      tMaps = hashSet(t);
      return Object.keys(sMaps).length == Object.keys(tMaps).length && Object.keys(sMaps).every(key => tMaps[key] === sMaps[key])
  };
```

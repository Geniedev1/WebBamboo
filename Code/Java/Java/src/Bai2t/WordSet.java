package Bai2t;
import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;

    class WordSet{
        private Set<String> words;
        public WordSet(String line){
            words = new TreeSet<>(Arrays.asList(line.toLowerCase().split("\\s+")));
        }
        public WordSet union(WordSet other){
            TreeSet<String> results = new TreeSet<>(words);
            results.addAll(other.words);
            return new WordSet(String.join(" ", results));
        }
        public WordSet intersection(WordSet other){
            TreeSet<String> results = new TreeSet<>(words);
            results.retainAll(other.words);
            return new WordSet(String.join(" ", results));
        }
        public String toString()
        {
            return String.join(" ", words);
        }
    }


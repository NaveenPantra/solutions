mod _000_contains_duplicates;
mod _001_valid_anagram;
mod _002_array_concatenation;
mod _003_reverse_sort_replace_1;
mod _004_string_is_subsequence;
mod _005_last_word_length;
mod _006_find_pair_sum;
mod _008_grouped_anagrams;

use _000_contains_duplicates::contains_duplicates_caller;
use _001_valid_anagram::valid_anagram_caller;
use _002_array_concatenation::array_concatenation_caller;
use _003_reverse_sort_replace_1::reverse_sort_replace_1_caller;
use _004_string_is_subsequence::is_string_subsequence_caller;
use _005_last_word_length::length_of_last_word_caller;
use _006_find_pair_sum::find_pair_sum_caller;
use _008_grouped_anagrams::group_anagrams_caller;

fn main() {
    contains_duplicates_caller();
    valid_anagram_caller();
    array_concatenation_caller();
    is_string_subsequence_caller();
    length_of_last_word_caller();
    reverse_sort_replace_1_caller();
    find_pair_sum_caller();
    group_anagrams_caller();
}

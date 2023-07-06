mod _000_contains_duplicates;
mod _001_valid_anagram;
mod _006_find_pair_sum;
mod _008_grouped_anagrams;

use _000_contains_duplicates::contains_duplicates_caller;
use _001_valid_anagram::valid_anagram_caller;
use _006_find_pair_sum::find_pair_sum_caller;
use _008_grouped_anagrams::group_anagrams_caller;

fn main() {
    contains_duplicates_caller();
    valid_anagram_caller();
    find_pair_sum_caller();
    group_anagrams_caller();
}

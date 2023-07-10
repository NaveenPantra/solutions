mod _000_contains_duplicates;
mod _001_valid_anagram;
mod _002_array_concatenation;
mod _003_reverse_sort_replace_1;
mod _004_string_is_subsequence;
mod _005_last_word_length;
mod _006_find_pair_sum;
mod _007_largest_common_prefix_in_strings;
mod _008_grouped_anagrams;
mod _009_pascals_triangle;
mod _010_remove_element;
mod _011_unique_email_addresses;
mod _012_isomorphic_strings;
mod _013_can_place_flowers;
mod _014_majority_element;

use _000_contains_duplicates::contains_duplicates_caller;
use _001_valid_anagram::valid_anagram_caller;
use _002_array_concatenation::array_concatenation_caller;
use _003_reverse_sort_replace_1::reverse_sort_replace_1_caller;
use _004_string_is_subsequence::is_string_subsequence_caller;
use _005_last_word_length::length_of_last_word_caller;
use _006_find_pair_sum::find_pair_sum_caller;
use _007_largest_common_prefix_in_strings::largest_common_prefix_in_strings_caller;
use _008_grouped_anagrams::group_anagrams_caller;
use _009_pascals_triangle::get_pascal_triangle_caller;
use _010_remove_element::remove_element_caller;
use _011_unique_email_addresses::unique_email_addresses_caller;
use _012_isomorphic_strings::isomorphic_strings_caller;
use _013_can_place_flowers::can_place_flowers_caller;
use _014_majority_element::majority_element_caller;

fn main() {
    contains_duplicates_caller();
    valid_anagram_caller();
    array_concatenation_caller();
    reverse_sort_replace_1_caller();
    is_string_subsequence_caller();
    length_of_last_word_caller();
    find_pair_sum_caller();
    largest_common_prefix_in_strings_caller();
    group_anagrams_caller();
    get_pascal_triangle_caller();
    remove_element_caller();
    unique_email_addresses_caller();
    isomorphic_strings_caller();
    can_place_flowers_caller();
    majority_element_caller();
}

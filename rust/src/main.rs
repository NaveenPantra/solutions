mod _000_contains_duplicates;
mod _002_find_pair_sum;
mod _003_grouped_anagrams;

use _000_contains_duplicates::contains_duplicates_caller;
use _002_find_pair_sum::find_pair_sum_caller;
use _003_grouped_anagrams::group_anagrams_caller;

fn main() {
    contains_duplicates_caller();
    find_pair_sum_caller();
    group_anagrams_caller();
}

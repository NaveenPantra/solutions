pub fn range_sum_query_immutable_caller() {
    println!("\n_017_range_sum_query_imm");
    let nums = vec![-2, 0, 3, -5, 2, -1];
    let num_array = NumsArray::new(nums.clone());
    println!("num_array.sum_range(0, 2) = {}", num_array.sum_range(0, 2));
    println!("num_array.sum_range(2, 5) = {}", num_array.sum_range(2, 5));
    println!("num_array.sum_range(0, 5) = {}", num_array.sum_range(0, 5));

    let num_array = NumsArrayV2::new(nums.clone());
    println!("num_array.sum_range(0, 2) = {}", num_array.sum_range(0, 2));
    println!("num_array.sum_range(2, 5) = {}", num_array.sum_range(2, 5));
    println!("num_array.sum_range(0, 5) = {}", num_array.sum_range(0, 5));
}

struct NumsArray {
    nums: Vec<i32>,
}

impl NumsArray {
    fn new(nums: Vec<i32>) -> Self {
        NumsArray { nums }
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        let mut sum = 0;
        for ind in left..=right {
            sum += self.nums[ind as usize];
        }
        sum
    }
}

struct NumsArrayV2 {
    sums: Vec<i32>,
}

impl NumsArrayV2 {
    fn new(nums: Vec<i32>) -> Self {
        let mut sums = Vec::with_capacity(nums.len());

        let mut prev_sum = 0;
        sums.push(prev_sum);
        for num in nums {
            prev_sum += num;
            sums.push(prev_sum);
        }

        NumsArrayV2 { sums }
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        self.sums[right as usize + 1] - self.sums[left as usize]
    }
}
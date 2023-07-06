pub fn array_concatenation_caller() {
    println!("\n002 - Concatenation of Array");
    let arr: Vec<i32> = vec![1, 2, 3, 4, 5];
    let arr = concatenate_array(arr);
    println!("Concatenated array {:?}\n", arr);
}

// apparently this is slow
fn concatenate_array(arr: Vec<i32>) -> Vec<i32> {
    let mut concat_arr = arr.clone();
    concat_arr.extend(arr);
    concat_arr
}
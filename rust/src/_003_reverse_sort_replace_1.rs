pub fn reverse_sort_replace_1_caller() {
    println!("\n001 - Replace elements with great ele on right side");
    let arr = vec![17, 18, 5, 4, 6, 1];
    // let arr = reverse_sort_replace_1(arr);
    let arr = rep_ele_wit_gre_ele_on_rig_sid(arr);
    println!("After replacements(descending order) {:?}\n", arr);
}

fn rep_ele_wit_gre_ele_on_rig_sid(mut arr: Vec<i32>) -> Vec<i32> {
    if arr.len() <= 1 {
        return vec![-1];
    }
    let mut great: i32 = -1;
    let mut j = arr.len() - 1;
    while j > 0 {
        let cur_ele = arr[j];
        arr[j] = great;
        if cur_ele > great {
            great = cur_ele;
        }
         j -= 1;
    }
    arr[j] = great;
    arr
}

// wrong understanding -> mis read the question - flaw
fn reverse_sort_replace_1(mut arr: Vec<i32>) -> Vec<i32> {
    arr.push(-1);
    if arr.len() <= 1 {
        return arr;
    }
    for i in 1..arr.len() {
        let key = arr[i];
        let mut j: i32 = i as i32 - 1;
        while j >= 0 && key > arr[j as usize] {
            let temp = arr[j as usize];
            arr[j as usize] = key;
            arr[i] = temp;
            j -= 1;
        }
        arr[(j + 1) as usize] = key;
    }
    arr
}
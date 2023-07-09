pub fn get_pascal_triangle_caller() {
    println!("\n_009_pascals_triangle");
    let num_rows = 6;
    let pascal_triangle = pascals_triangle(num_rows);
    println!("Pascal triangle for rows {num_rows} is {:?}", pascal_triangle);
}

fn pascals_triangle(num_rows: i32) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    if num_rows == 1 {
        return vec![vec![1]];
    } else if num_rows == 2 {
        return vec![vec![1], vec![1, 1]]
    }
    res.push(vec![1]);
    res.push(vec![1, 1]);

    for i in 2..num_rows {
        res.push(vec![1]);
        for j in 1..i {
            let val = res[i as usize - 1][j as usize - 1] + res[i as usize - 1][j as usize];
            res[i as usize].push(val);
        }
        res[i as usize].push(1);
    }

    res
}
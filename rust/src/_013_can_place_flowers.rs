pub fn can_place_flowers_caller() {
    println!("\n_013_can_place_flowers");
    let flowerbed = vec![1, 0, 0, 0, 1];
    let n = 2;
    let can_place = can_place_flowers(flowerbed.clone(), n);
    println!("Can place {n} flower(s) in {:?}? {can_place}", flowerbed);
}

fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
    if n > ((flowerbed.len() / 2) as i32) + 1 {
        return false;
    }
    let mut prev = 0;
    let mut counter = 0;
    for (index, current) in flowerbed.iter().enumerate() {
        if let Some(next) = flowerbed.get(index + 1) {
            if *current == 1 {
                prev = 1;
                continue;
            }

            if prev == 0 && *current == 0 && *next == 0 {
                counter += 1;
                prev = 1;
                continue;
            }

            prev = 0;
        } else if prev == 0 && *current == 0 {
            counter += 1;
        }
    }
    counter >= n
}
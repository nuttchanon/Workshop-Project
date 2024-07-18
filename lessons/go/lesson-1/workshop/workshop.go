package main

import "fmt"

func main() {
	// Workshop: Println

	// Output:
	// เรื่อง: Avengers: Endgame
	// ปี: 2019
	// เรตติ้ง: 8.4
	// ประเภท: Sci-Fi
	// ซุปเปอร์ฮีโร่: true

	// TODO: write code bolow.
	var title, year , rating , genre , isSuperhero  = "Avengers: Endgame", 2019, 8.4, "Sci-Fi", true
	fmt.Println("เรื่อง:", title)
	fmt.Println("ปี:", year)
	fmt.Println("เรตติ้ง:", rating)
	fmt.Println("ประเภท:", genre)
	fmt.Println("ซุปเปอร์ฮีโร่:", isSuperhero)
}

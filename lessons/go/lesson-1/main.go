package main

import "fmt"

var msg1 string = "Hello, World!"

func main() {
	// String varaiable
	{
		fmt.Println("msg1:", msg1)
		msg2 := "Nuttchanon"
		fmt.Println("msg2:", msg2)
		msg2 = "Nuttchanon " + "Jantawong"
		fmt.Println("msg2:", msg2)
	}

	// Number variable
	{
		age := 20
		var price float64 = 100.00
		sum,checked := 0, false
		fmt.Println("age:", age)
		fmt.Println("price:", price)
		fmt.Println("sum:", sum)
		fmt.Println("checked:", checked)
	}

	// other variable
	{
		// bool (boolean)
		// string (string)
		// int (int8, int16, int32, int64)
		// uint (uint8, uint16, uint32, uint64, uintptr)
		// byte (alias for uint8)
		// rune (alias for int32)
		// float (float32, float64)
		// complex (complex64, complex128)
		// array
	}
}
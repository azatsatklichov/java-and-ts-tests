package net.sahet.javatesting;

public class Calc {

	private static int x = 8;

	public int multiply(int a, int b) {
		System.out.println(x);
		if (a > b) {
			System.out.println("ok");
		} else {
			System.out.println("ko");
			x = 19;
			System.out.println(x);
		}
		return a * b;
	}

	public int foo(int x, int y) {
		int z = 0;
		if ((x > 0) && (y > 0)) {
			z = x;
		}
		return z;
	}

	/**
	 * Statement Test Coverage example
	 * 
	 * @param a
	 * @param b
	 */
	public int displaySum(int a, int b) {
		int sum = a + b;
		if (sum > 0) {
			System.out.println("Psotive sum = " + sum);
		} else if (sum < 0) {
			System.out.println("Negative sum = " + sum);
		}
//		else {
//			System.out.println("Zero");
//		}
		return sum;
	}

	public int calcSum(int x, int y) {
		if ((x == 0) || (y < 0)) {
			y = y / x; 
		} else {
			x = y + 2;
		}
		return x + y;
	}
}

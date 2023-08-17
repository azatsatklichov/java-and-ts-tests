package net.sahet.javatesting;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class CalcTest {

	Calc calculator;

	@BeforeEach
	void setUp() {
		calculator = new Calc();
	}

	@Test
	@DisplayName("Simple multiplication should work")
	void testMultiply() {
		assertEquals(20, calculator.multiply(4, 5), "Regular multiplication should work");
	}

	// @Test
	@DisplayName("Simple multiplication should work")
	void testMultiply2() {
		assertEquals(20, calculator.multiply(5, 4), "Regular multiplication should work");
	}

	// @RepeatedTest(5)
	@DisplayName("Ensure correct handling of zero")
	void testMultiplyWithZero() {
		assertEquals(0, calculator.multiply(0, 5), "Multiple with zero should be zero");
		assertEquals(0, calculator.multiply(5, 0), "Multiple with zero should be zero");
	}

	@Test
	@DisplayName("DisplaySum")
	void testDisplaySum() {
		assertEquals(15, calculator.displaySum(5, 10));
		assertEquals(-5, calculator.displaySum(-10, 5));
		assertEquals(0, calculator.displaySum(-10, 10));
	}

	@Test
	@DisplayName("calcSum")
	void testCalcSum() {
		assertEquals(12, calculator.calcSum(5, 5));
		assertEquals(-4, calculator.calcSum(-5, -5));
		
		
		//assertEquals(-4, calculator.calcSum(0, 5));		
		ArithmeticException thrown = assertThrows(ArithmeticException.class, () -> {
			calculator.calcSum(0, 5);
		}, "by zero");
		
		assertEquals("/ by zero", thrown.getMessage());
	}

}

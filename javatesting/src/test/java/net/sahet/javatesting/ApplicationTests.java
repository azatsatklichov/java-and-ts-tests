package net.sahet.javatesting;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import org.apache.commons.lang3.StringUtils;
import org.bitbucket.cowwoc.diffmatchpatch.DiffMatchPatch;
import org.bitbucket.cowwoc.diffmatchpatch.DiffMatchPatch.Diff;
import org.springframework.test.util.AssertionErrors;

import java.util.Arrays;
import java.util.LinkedList;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
class ApplicationTests {

	@Test
	void contextLoads() {
		//orgAssertThat
	}

	/**
	 * The first one is a library written by Google called diff-match-patch. As they
	 * claim, the library offers robust algorithms for synchronizing plain text.
	 */
	@Test //(expected = AssertionError.class)
	public void testDiffMatch() {

		String text1 = "ABCDELMN";
		String text2 = "ABCFGLMN";
		DiffMatchPatch dmp = new DiffMatchPatch();
		LinkedList<Diff> diff = dmp.diffMain(text1, text2, false);
		System.out.println(diff);

		//AssertionErrors.assertEquals(diff, Arrays.asList("Diff(EQUAL,\"ABC\"), Diff(DELETE,\"DE\"), Diff(INSERT,\"FG\"), Diff(EQUAL,\"LMN\")"));

	}

	/**
	 * StringUtils is clearly more performant, although it only returns the
	 * substring from which the two strings start to differ.
	 */
	@Test
	public void testDiffMatch2() {

		String text1 = "ABCDELMN";
		String text2 = "ABCFGLMN";

		String diff = StringUtils.difference(text1, text2);
		System.out.println(diff);

		assertEquals("FGLMN", diff);
	}

}

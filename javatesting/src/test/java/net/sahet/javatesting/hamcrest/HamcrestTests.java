package net.sahet.javatesting.hamcrest;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hamcrest.Matchers;
import org.hamcrest.beans.HasProperty;
import org.hamcrest.object.HasToString;
import org.hamcrest.text.IsEqualIgnoringCase;
import org.hamcrest.collection.IsEmptyCollection;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;



import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

/**
 * https://www.baeldung.com/java-junit-hamcrest-guide#:~:text=Overview,matcher%20classes%20%E2%80%93%20for%20making%20assertions
 */
public class HamcrestTests {

    private String b;

    /**
     * String Matcher
     */
    @Test
    public void given2Strings_whenEqual_thenCorrect() {
        String a = "foo";
        String b = "FOO";
        assertThat(a, IsEqualIgnoringCase.equalToIgnoringCase(b));
    }

    /**
     * Object Matcher
     */
    @Test
    public void givenBean_whenToStringReturnsRequiredString_thenCorrect() {
        Person person = new Person("Barrack", "Washington");
        String str = person.toString();
        assertThat(person, HasToString.hasToString(str));
    }


    @Test
    public void givenBean_whenHasValue_thenCorrect() {
        Person person = new Person("Barrack", "Washington");
        assertThat(person, HasProperty.hasProperty("washington"));
    }


    @Test
    @Disabled("just skip")
    public void given2Beans_whenHavingSameValues_thenCorrect() {
        Person person1 = new Person("Baeldung", "New York");
        Person person2 = new Person("Baeldung", "New York");
        assertThat(person1, Matchers.samePropertyValuesAs(person2));
    }


    /**
     * Collection Matcher
     */
    @Test
    public void givenCollection_whenEmpty_thenCorrect() {
        List<String> emptyList = new ArrayList<>();
        assertThat(emptyList, IsEmptyCollection.empty());
    }

}


@Data
@AllArgsConstructor
class Person {
    private String barrack;
    private String washington;

}

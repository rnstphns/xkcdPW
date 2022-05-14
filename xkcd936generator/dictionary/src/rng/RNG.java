package rng;

import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class RNG {
	
	static final int DICT_LENGTH = 370104;
	public static final String DICT_DIR = System.getProperty("user.dir") 
			+ "\\src\\dictionary\\words_alpha.txt";
	private List<String> dictionary = Collections.emptyList();

	public String randomWord(){
		int seed = new Random().nextInt(DICT_LENGTH);
		initDictionary();
		return dictionary.get(seed);
		
	}
	
	private void initDictionary() {
		if(dictionary.isEmpty()) {
			Scanner sc = new Scanner(DICT_DIR);
			while(sc.hasNextLine()) {
				dictionary.add(sc.next());
			}
			sc.close();
		}
	}
}

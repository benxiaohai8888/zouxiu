import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;

public class Test {
	public static void main(String[] args) throws UnsupportedEncodingException {
		String str = "%E5%B7%A5%E5%8D%95%E8%AF%A6%E6%83%85";
		String string = URLDecoder.decode(str, "utf-8");
		System.out.println(string);
		System.out.println(new Date());
	}
}

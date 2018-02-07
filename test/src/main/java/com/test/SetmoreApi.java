package com.test;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.logging.Logger;

public class SetmoreApi extends HttpServlet{
//	private static final Logger log = Logger.getLogger(SetmoreApi.class.getName());
	// http://localhost:8080/RESTfulExample/json/product/get
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		System.out.println("inside");
		URLConnection conn = new URL("https://developer.setmore.com/api/v1/o/oauth2/token?refreshToken=dd51e2a9d25muTwhH10_XGYejeJvLj-QLhJnK-ikNrfIX").openConnection();
	
		
		
		System.out.println(conn);
	//	URLConnection conn =  url.openConnection();
		System.out.println(conn);
		
		
		conn.setRequestProperty("Content-Type",
				"application/x-www-form-urlencoded;charset=");
		String charset = "UTF-8";
	

		InputStream response = conn.getInputStream();
		System.out.println(response);

	


}
	
	
	
	public static void main() {
		
		
		URLConnection conn;
		try {
			conn = new URL("https://developer.setmore.com/api/v1/o/oauth2/token?refreshToken=dd51e2a9d25muTwhH10_XGYejeJvLj-QLhJnK-ikNrfIX").openConnection();

			System.out.println(conn);
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}


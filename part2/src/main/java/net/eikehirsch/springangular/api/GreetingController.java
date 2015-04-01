package net.eikehirsch.springangular.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * @author Eike Hirsch
 *         Date: 27.03.15
 *         Time: 13:54
 */
@RestController
public class GreetingController {

	@RequestMapping("/greeting")
	public Map<String,Object> home() {
		Map<String,Object> model = new HashMap<>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}
}

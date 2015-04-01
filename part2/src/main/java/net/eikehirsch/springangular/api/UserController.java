package net.eikehirsch.springangular.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * @author Eike Hirsch
 *         Date: 27.03.15
 *         Time: 13:54
 */
@RestController
public class UserController {

	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}
}

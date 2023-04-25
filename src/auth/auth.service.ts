import { Injectable } from "@nestjs/common";

  
  @Injectable()
  export class AuthService {
  
     signup() {
    return "hi from signup"
    }
  
     signin() {
        return "hi from signin"
    }
  

  }
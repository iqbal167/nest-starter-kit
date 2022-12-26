import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('authentications')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('local')
  async login(@Req() req: Request) {
    return req.user;
  }
}

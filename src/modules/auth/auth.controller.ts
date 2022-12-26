import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('authentications')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('local')
  async login(@Req() req: Request) {
    return req.user;
  }
}

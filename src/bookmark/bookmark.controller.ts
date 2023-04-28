import { Controller, UseGuards, Body, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import {
    CreateBookmarkDto,
  } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post()
  createBookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(
      userId,
      dto,
    );
  }
}

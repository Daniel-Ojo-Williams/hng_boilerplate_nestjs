import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Testimonial } from './entities/testimonials.entity';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonial, User])],
  controllers: [TestimonialsController],
  providers: [TestimonialsService, Repository],
})
export class TestimonialsModule {}
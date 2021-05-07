import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DialogFlowModule } from 'nestjs-dialogflow';
import { PredictionModelModule } from 'predictionModel/predictionModel.module';
import { ChatbotController } from './chatbot.controller';
import { ChatbotDialogflowProvider } from './chatbot.dialogflow.provider';
import { ChatbotService } from './chatbot.service';
import { ChatMessageRepository } from './domain/chatMessage.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatMessageRepository]),
    DialogFlowModule.forRoot({
      basePath: 'chatbot',
      postPath: 'dialog-flow',
    }),
    PredictionModelModule,
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotDialogflowProvider],
})
export class ChatbotModule {}

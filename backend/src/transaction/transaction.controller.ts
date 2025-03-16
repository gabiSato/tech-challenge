import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { Transaction } from './transaction.schema';
import { TransactionTypeDto } from './dto/transaction-type.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create a transaction' })
  @ApiResponse({
    status: 201,
    description: 'Transaction created successfully',
    type: TransactionDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async create(
    @Request() req,
    @Body() transactionDto: TransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.create(req.user._id, transactionDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Get transactions for the logged in user' })
  @ApiResponse({
    status: 200,
    description: 'Transactions retrieved successfully',
    type: [Transaction],
  })
  async findByUser(@Request() req): Promise<Transaction[]> {
    return this.transactionService.findByUser(req.user._id.toString());
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Get transaction' })
  @ApiResponse({
    status: 200,
    description: 'Transaction retrieved successfully',
    type: Transaction,
  })
  async findById(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.findById(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Update transaction' })
  @ApiResponse({
    status: 200,
    description: 'Transaction updated successfully',
    type: Transaction,
  })
  @ApiResponse({ status: 422, description: 'Invalid input' })
  async update(
    @Param('id') id: string,
    @Body() transactionDto: TransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.update(id, transactionDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete transaction' })
  @ApiResponse({
    status: 200,
    description: 'Transaction deleted successfully',
    type: Transaction,
  })
  async delete(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.delete(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Get('balance')
  @ApiOperation({ summary: 'Get the current balance' })
  @ApiResponse({
    status: 200,
    description: 'Current balance retrieved successfully',
    type: Number,
  })
  async getBalance(@Request() req): Promise<{ balance: number }> {
    const balance = await this.transactionService.getBalance(req.user._id);
    return { balance };
  }

  @Get('types')
  @ApiOperation({ summary: 'Get transaction types' })
  @ApiResponse({
    status: 200,
    description: 'Transaction types retrieved successfully',
    type: [TransactionTypeDto],
  })
  getTransactionTypes(): { value: string; display: string }[] {
    return this.transactionService.getTransactionTypes();
  }
}

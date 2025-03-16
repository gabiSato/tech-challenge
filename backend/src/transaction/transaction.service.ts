import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  Transaction,
  TransactionType,
  TransactionTypeDisplay,
} from './transaction.schema';
import { TransactionDto } from './dto/transaction.dto';
import { User } from '../user/user.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(
    userId: string | Types.ObjectId,
    transactionDto: TransactionDto,
  ): Promise<Transaction> {
    let { value } = transactionDto;
    const { type } = transactionDto;

    if (
      type === TransactionType.WITHDRAWAL ||
      type === TransactionType.TRANSFER
    ) {
      value = -value;
    }

    userId = this.parseUserId(userId);

    const transaction = new this.transactionModel({
      user: userId,
      value,
      type,
    });

    return transaction.save();
  }

  async findByUser(userId: string | Types.ObjectId): Promise<Transaction[]> {
    userId = this.parseUserId(userId);
    // filters
    // type, date
    return this.transactionModel.find({ user: userId }).exec();
  }

  async findById(id: string): Promise<Transaction> {
    return this.transactionModel.findById(id).exec();
  }

  async update(
    id: string,
    transactionDto: TransactionDto,
  ): Promise<Transaction> {
    return this.transactionModel
      .findByIdAndUpdate(id, transactionDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Transaction> {
    return this.transactionModel.findByIdAndDelete(id).exec();
  }

  private parseUserId(userId: string | Types.ObjectId) {
    if (typeof userId === 'string') {
      if (Types.ObjectId.isValid(userId)) {
        userId = new Types.ObjectId(userId);
      } else {
        throw new BadRequestException('Invalid user ID format');
      }
    }
    return userId;
  }

  async getBalance(userId: string): Promise<number> {
    const transactions = await this.transactionModel
      .find({ user: userId })
      .exec();
    return transactions.reduce(
      (acc, transaction) => acc + transaction.value,
      0,
    );
  }

  getTransactionTypes(): { value: string; display: string }[] {
    return Object.values(TransactionType).map((type) => ({
      value: type,
      display: TransactionTypeDisplay[type],
    }));
  }
}

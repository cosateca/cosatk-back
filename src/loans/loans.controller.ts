/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, Res, HttpStatus } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
// import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { ApiTags } from '@nestjs/swagger';
import { UpdateLoanDto } from './dto/update-loan.dto';

@ApiTags('Loans')
@Controller('loans')
export class LoansController {
  loanService: any;
  constructor(private readonly loansService: LoansService) {}

  @Post('/create')
  async createLoan(@Body() newLoan: CreateLoanDto) {
    return await this.loansService.createLoan(newLoan);
  }

  @Get()
  getLoans():Promise<Loan[]>{ 
    return this.loansService.getLoans();
  }

  @Get(':id')
  getOneLoan(@Param('id') id: string) {
    return this.loansService.getOneLoan(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.loansService.releaseLoanById(+id);
  }  


  @Delete('/:idLoan')
  deleteLoan(@Param('idLoan', ParseIntPipe) idLoan: number) {
    return this.loansService.deleteLoan(idLoan);
  }

  // @Put(':idLoan')
  // updateLoanById(@Param('idLoan') idLoan: number, @Body() loan: UpdateLoanDto) {
  //   return this.loanService.updateLoanById(idLoan, loan);
  // }

  @Put('/:idLoan')
  updateCategory(@Param('idLoan') idLoan: number, @Body() loan:UpdateLoanDto) {
    return this.loansService.updateLoanById(idLoan, loan);
  }

  @Get('/userIdUsers/:userIdUsers')
  async getLoanByUserId(@Res()res:any, @Param('userIdUsers') userIdUsers: number) {
    const loan = await this.loansService.getLoanByUserId(userIdUsers)
    return res.status(HttpStatus.OK).json(loan); 
  }

  @Get('/articleIdArticle/:articleIdArticle')
  async getLoanByArticleId(@Res()res:any, @Param('articleIdArticle') articleIdArticle: number) {
    const loan = await this.loansService.getLoanByArticleId(articleIdArticle)
    return res.status(HttpStatus.OK).json(loan); 
  }

  @Get('/status/:status')
  async getLoanWithStatusTrue(@Res()res:any, @Param('status') status: boolean) {
    const loan = await this.loansService.getLoanWithStatusTrue(status)
    return res.status(HttpStatus.OK).json(loan); 
  
  }

  
  @Get('/checked_out')
  async getLoanWithCheckedOutDateExpired(@Res()res:any ) {
    const loan = await this.loansService.getLoansWithCheckedOutExpired()
    return res.status(HttpStatus.OK).json(loan); 
  
  }


  


  
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
  //   return this.loansService.update(+id, updateLoanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loansService.remove(+id);
  // }
}

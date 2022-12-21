import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __classPrivateFieldSet } from 'tslib';
import { getQuestions } from './util';
@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  QuestionListConst: any[]
  questionIdVisible: number
  questionsViewed: number
  score: number
  leaderBoard: {userName: string, score: number}[]

  constructor () {
    this.QuestionListConst = getQuestions()
    this.questionIdVisible = this.QuestionListConst[0].questionId
    this.questionsViewed = 0
    this.score = 0
    this.leaderBoard = []
  }

  restartGame () {
    this.QuestionListConst = getQuestions()
    this.questionIdVisible = this.QuestionListConst[0].questionId
    this.questionsViewed = 0
    this.score = 0
    this.clearOptions()
    document.querySelector(".leaderBoard")?.classList.add("hidden")
    document.querySelector(".btn")?.classList.add("hidden")
  }
  clearOptions = () => {
    const elements = document.querySelectorAll(".answer")
    elements.forEach(element => {
      if(element)
      element.classList.remove("correct")
      element.classList.remove("incorrect")
    })
  }

  showLeaderBoard = () => {
    let board: {userName: string, score: number}[] = localStorage.getItem("leaderBoard")!==null ? JSON.parse(localStorage.getItem("leaderBoard")??''):undefined
    if(board) {
      board.push({userName: sessionStorage.getItem("name")??"no username", score: this.score })
      board.sort((a,b) => b.score - a.score)
      localStorage.setItem("leaderBoard", JSON.stringify(board))
      this.leaderBoard = board
    }else {
      board = [{userName: sessionStorage.getItem("name")??"no username", score: this.score}]
      localStorage.setItem("leaderBoard", JSON.stringify(board))
      this.leaderBoard = board
    }
    document.querySelector(".leaderBoard")?.classList.remove("hidden")
  }
  checkAnswer (event: any, option: any) {
    const correctAnswerId = this.QuestionListConst.find(question => question.questionId === option.questionId).options.find((item: { isCorrectAnswer: boolean; }) => item.isCorrectAnswer).answerId
    if(option.isCorrectAnswer) {
      event.target.classList.add("correct")
      this.score = this.score + 1
    }else {
      event.target.classList.add("incorrect")
      correctAnswerId && document.getElementById(`${option.questionId}-${correctAnswerId}`)?.classList.add("correct")
    }
    this.questionsViewed = this.questionsViewed + 1
    if(this.questionsViewed <= 4){
      setTimeout(() => {
        this.questionIdVisible = this.QuestionListConst[this.questionsViewed].questionId
        this.clearOptions()
      }, 1000)  
    } else {
      document.querySelector(".btn")?.classList.remove("hidden")
      this.showLeaderBoard()
    }
  }
}

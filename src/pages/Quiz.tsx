import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const quizQuestions = [
  {
    id: 1,
    question: "In which year did Ghana win their first AFCON title?",
    options: ["1957", "1961", "1963", "1965"],
    correct: 2,
    explanation: "Ghana won their first Africa Cup of Nations title in 1963, defeating Sudan 3-0 in the final on home soil."
  },
  {
    id: 2,
    question: "How many AFCON titles has Ghana won in total?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Ghana has won 4 AFCON titles (1963, 1965, 1978, 1982), making them one of Africa's most successful nations."
  },
  {
    id: 3,
    question: "Which legendary Ghana player captained the Black Stars at the 2010 World Cup?",
    options: ["Abedi Pele", "Asamoah Gyan", "Anthony Yeboah", "Kalusha Bwalya"],
    correct: 1,
    explanation: "Asamoah Gyan was the captain of Ghana's 2010 World Cup team that reached the quarter-finals."
  },
  {
    id: 4,
    question: "In what year did Ghana make their historic World Cup debut?",
    options: ["2002", "2004", "2006", "2008"],
    correct: 2,
    explanation: "Ghana made their first FIFA World Cup appearance in 2006 in Germany, becoming the second African nation to qualify."
  },
  {
    id: 5,
    question: "Which prestigious tournament did Ghana's U-20 team win in 2009?",
    options: ["U-20 AFCON", "FIFA U-20 World Cup", "Olympic Games", "WAFU Cup"],
    correct: 1,
    explanation: "Ghana became the first African nation to win the FIFA U-20 World Cup in 2009."
  },
  {
    id: 6,
    question: "What is the nickname of Ghana's national football team?",
    options: ["The Eagles", "The Lions", "The Black Stars", "The Panthers"],
    correct: 2,
    explanation: "Ghana's national team is known as the Black Stars, one of Africa's most respected football teams."
  },
  {
    id: 7,
    question: "In which African country did Ghana win their 1965 AFCON title?",
    options: ["Ghana", "Tunisia", "Egypt", "Cameroon"],
    correct: 1,
    explanation: "Ghana successfully defended their AFCON title in Tunisia in 1965, showcasing their dominance in African football."
  },
  {
    id: 8,
    question: "What significant achievement did Ghana achieve at the 2010 World Cup?",
    options: ["Won the tournament", "Reached the finals", "Reached the quarter-finals", "Won their group"],
    correct: 2,
    explanation: "Ghana became the third African nation to reach the World Cup quarter-finals in 2010."
  },
];

interface Answer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === quizQuestions[currentQuestion].correct;
    const newAnswer: Answer = {
      questionId: quizQuestions[currentQuestion].id,
      selectedOption: optionIndex,
      isCorrect
    };

    setAnswers([...answers, newAnswer]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizComplete(false);
  };

  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const scorePercentage = Math.round((correctAnswers / quizQuestions.length) * 100);
  const question = quizQuestions[currentQuestion];

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
          <div className="container-museum">
            <div className="max-w-2xl">
              <p className="text-secondary font-medium mb-2">Quiz Complete</p>
              <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
                YOUR RESULTS
              </h1>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-museum">
            <div className="max-w-2xl mx-auto">
              <Card className="mb-8">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="mb-8">
                    {scorePercentage >= 80 ? (
                      <Trophy className="w-16 h-16 text-secondary mx-auto mb-4" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                    )}
                  </div>

                  <h2 className="font-display text-5xl md:text-6xl text-secondary mb-4">
                    {scorePercentage}%
                  </h2>
                  <p className="text-xl text-foreground mb-2">
                    You answered {correctAnswers} out of {quizQuestions.length} questions correctly
                  </p>

                  <div className="my-8">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      Score: {correctAnswers} / {quizQuestions.length}
                    </div>
                    <Progress value={scorePercentage} className="h-3" />
                  </div>

                  <div className="space-y-2 mb-8 text-left bg-muted/50 rounded-lg p-6">
                    {scorePercentage >= 90 && (
                      <p className="text-base text-foreground">
                        🏆 <span className="font-semibold">Excellent!</span> You're a true Ghana football expert! Your knowledge of Black Stars history is outstanding.
                      </p>
                    )}
                    {scorePercentage >= 75 && scorePercentage < 90 && (
                      <p className="text-base text-foreground">
                        ⭐ <span className="font-semibold">Great Job!</span> You have strong knowledge of Ghana football. Keep exploring our archives for more fascinating history.
                      </p>
                    )}
                    {scorePercentage >= 60 && scorePercentage < 75 && (
                      <p className="text-base text-foreground">
                        👍 <span className="font-semibold">Good Effort!</span> You know quite a bit about Ghana football. Visit our exhibits to learn more about the Black Stars legend.
                      </p>
                    )}
                    {scorePercentage < 60 && (
                      <p className="text-base text-foreground">
                        📚 <span className="font-semibold">Keep Learning!</span> Ghana football has a rich history. Explore our archives and exhibits to discover more amazing stories.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" onClick={handleRestart} className="flex-1">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Retake Quiz
                    </Button>
                    <Button asChild variant="outline" size="lg" className="flex-1">
                      <Link to="/exhibits">
                        Explore More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Review */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl tracking-wider mb-6">Quiz Review</h3>
                {quizQuestions.map((q, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer?.isCorrect;

                  return (
                    <Card key={q.id} className={`${isCorrect ? 'border-primary/50 bg-primary/5' : 'border-destructive/50 bg-destructive/5'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {isCorrect ? (
                              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                            ) : (
                              <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-3">{q.question}</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-muted-foreground">
                                Your answer: <span className={isCorrect ? 'text-primary font-medium' : 'text-destructive font-medium'}>{q.options[userAnswer.selectedOption]}</span>
                              </p>
                              {!isCorrect && (
                                <p className="text-muted-foreground">
                                  Correct answer: <span className="text-primary font-medium">{q.options[q.correct]}</span>
                                </p>
                              )}
                              <p className="text-muted-foreground italic pt-2 border-t border-border/50">{q.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-2xl">
            <p className="text-secondary font-medium mb-2">Test Your Knowledge</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
              GHANA FOOTBALL QUIZ
            </h1>
            <p className="text-muted text-lg">
              Think you know Ghana football? Challenge yourself with our interactive quiz covering decades of Black Stars history.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-museum">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-secondary">
                  {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                </span>
              </div>
              <Progress value={(currentQuestion + 1) / quizQuestions.length * 100} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="mb-8">
              <CardContent className="p-8 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-8">
                  {question.question}
                </h2>

                {/* Answer Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left font-medium ${
                        showResult
                          ? index === question.correct
                            ? 'border-primary bg-primary/10 text-foreground'
                            : index === answers[currentQuestion]?.selectedOption
                            ? 'border-destructive bg-destructive/10 text-foreground'
                            : 'border-border bg-muted/50 text-muted-foreground cursor-default'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          showResult
                            ? index === question.correct
                              ? 'border-primary bg-primary text-white'
                              : index === answers[currentQuestion]?.selectedOption
                              ? 'border-destructive bg-destructive text-white'
                              : 'border-border'
                            : 'border-border'
                        }`}>
                          {showResult && index === question.correct && (
                            <CheckCircle2 className="w-4 h-4" />
                          )}
                          {showResult && index === answers[currentQuestion]?.selectedOption && index !== question.correct && (
                            <XCircle className="w-4 h-4" />
                          )}
                        </div>
                        {option}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className="mt-8 p-4 bg-muted rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold block mb-2">
                        {answers[currentQuestion]?.isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                      </span>
                      {question.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            {showResult && (
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/exhibits" className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Exhibits
                  </Link>
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleNext}
                  className="flex-1"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;

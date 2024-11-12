from turtle import *
from math import *

# Параметри гіперболи
# Значення для a і b
a = 2
b = 1
scale = 15  # Коефіцієнт масштабу (додатні числа, більші за нуль)

fontForLetters = ("Arial", 16, "bold")

# Базові дані
setup(width=800, height=600)
title("Графік гіперболи")
bgcolor("#ffffff")
speed(0)
speed(0)
tracer(False)
hideturtle()

# Побудова вісі   
def zasichka():
    left(90)
    forward(5)
    back(10)
    forward(5)
    right(90)


def arrow():
    setheading(heading() + 150)
    forward(15)
    back(15)
    left(60)
    forward(15)
    back(15)


# Вісь X
teleport(-400, 0)
pendown()
for i in range(20):
    zasichka()
    forward(40)
arrow()

# Вісь Y
setheading(90)
teleport(0, -280)
for i in range(15):
    zasichka()
    forward(40)
arrow()

# Підписи осей
teleport(380, -30)
write("X", align="center", font=fontForLetters)

teleport(20, 280)
write("Y", align="center", font=fontForLetters)

x_values = range(-a * 10, a * 10, 1)

tracer(True)

# Малювання позитивної гілки гіперболи
penup()
color("blue")
for x in x_values:
    if b != 0:
        try:
            y = b * sqrt((x**2 / a**2) - 1)
            goto(x * scale, y * scale)
            pendown()
        except ValueError:
            penup()
    else:
        print("Не вводь нулі в знаменник!")


# Малювання негативної гілки гіперболи
penup()
color("#ff00ff")
for x in x_values:
    if b != 0:
        try:
            y = -b * sqrt((x**2 / a**2) - 1)
            goto(x * scale, y * scale)
            pendown()
        except ValueError:
            penup()
    else:
        print("Не вводь нулі в знаменник!")

# Асимптоти гіперболи
penup()
color("green")
for x in x_values:
    try:
        y = (b * x) / a
        goto(x * scale, y * scale)
        pendown() if x % 3 == 1 else penup()
    except ValueError:
        break

penup()
for x in x_values:
    try:
        y = -(b * x) / a
        goto(x * scale, y * scale)
        pendown() if x % 3 == 1 else penup()
    except ValueError:
        break

# Фокуси гіперболи
tracer(False)

c1 = sqrt(a**2 + b**2)
teleport(c1 * scale, 0)
color("purple")
dot()
teleport(xcor() + 30, ycor() - 25)
write("F1", align="center", font=fontForLetters)

c2 = -sqrt(a**2 + b**2)
teleport(c2 * scale, 0)
dot()
teleport(xcor() - 30, ycor() - 25)
write("F2", align="center", font=fontForLetters)

tracer(True)
mainloop()
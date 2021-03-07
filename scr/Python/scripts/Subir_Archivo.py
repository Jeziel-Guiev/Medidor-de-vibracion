import serial, time
from tkinter import *


def led_on():

 contador=0
 f = open ("./TXT/tostado1.txt",'r')

 while True:
     
     linea = f.readline()
     valor=linea.rstrip('\n')
     arduinoData.write(valor.encode())
     time.sleep(0.010)
     rawSqtring = arduinoData.readline()
     print(rawSqtring)
     contador= contador+1   
     if not linea:

        break

     
def led_off():
     arduinoData.write('show'.encode());
     time.sleep(0.10)
     rawString = arduinoData.readline()
     print(rawString)
def led_close():
     arduinoData.close()
     
def prog():
     arduinoData.write('PROG'.encode());
     

led_control_window = Tk()

led_control_window.minsize(width=266, height=266)
led_control_window.maxsize(width=266, height=266)
led_control_window.maxsize(width=266, height=266)


btnPro = Button(led_control_window,text="INICIAR",command=prog)
btn = Button(led_control_window,text="Cargar Archivo",command=led_on)
btn2 = Button(led_control_window,text="mostrar archivo cargado",command=led_off)
btn3 = Button(led_control_window,text="cerrar puerto",command=led_close)

btnPro.pack()
btn.pack()
btn2.pack()
btn3.pack()

arduinoData = serial.Serial('COM6', 9600)
mainloop()

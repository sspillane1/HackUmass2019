import cv2 as cv
import numpy as np
cap = cv.VideoCapture(0)
while(1):
    # Take each frame
    _, frame = cap.read()
    # Convert BGR to HSV
    hsv = cv.cvtColor(frame, cv.COLOR_BGR2BGRA)


    # Bitwise-AND mask and original image

    # Manual Approach
    blue = frame[:, :, 1]

    frame[:, :, 0] = blue



    cv.imshow('HSV',hsv)
    cv.imshow('Result',frame)
    k = cv.waitKey(5) & 0xFF
    if k == 27:
        break
cv.destroyAllWindows()
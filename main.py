count_down = 0

def on_button_pressed_a():
    global count_down
    count_down = -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count_down
    count_down = 9
    while count_down >= 0:
        basic.show_number(count_down)
        count_down += -1
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
    """)
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
    """)
    basic.show_leds("""
        . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # . # .
    """)
    basic.show_leds("""
        # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def num_encodings(s):
    if s.startswith('0'):
        return 0
    elif len(s) <= 1: # This covers empty string
        return 1

    total = 0

    if int(s[:2]) <= 26:
        total += num_encodings(s[2:])

    total += num_encodings(s[1:])
    return total

def main():
    print(num_encodings('111'))
    print(num_encodings('1114'))
    print(num_encodings('12221341123'))

if __name__ == "__main__":
    main()
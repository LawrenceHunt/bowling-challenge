describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame();
  });

  describe('canBowl', function() {
    it('returns true', function(){
      expect(frame.canBowl()).toBeTruthy();
    });
  });

  describe('first bowl', function() {
    it('returns the frame', function() {
      expect(frame.bowl(8)).toEqual(frame);
    });

    describe('is under 0', function() {
      it('throws an error', function() {
        expect(function() {frame.bowl(-1)}).toThrow();
      });
    });

    describe('is over 10', function() {
      it('throws an error', function() {
        expect(function() {frame.bowl(11)}).toThrow();
      });
    });

    describe('is a strike', function() {
      beforeEach(function() {
        frame.bowl(10);
      });

      describe('isAStrike', function() {
        it('returns true', function() {
          expect(frame.isAStrike()).toBeTruthy();
        });
      });

      describe('isASpare', function() {
        it('returns false', function() {
          expect(frame.isASpare()).toBeFalsy();
        });
      });
      
      it('prevents further bowls', function() {
        expect(frame.canBowl()).toBeFalsy();
      });
    });

    describe('is not a strike', function() {
      beforeEach(function() {
        frame.bowl(9);
      });

      describe('isAStrike', function() {
        it('returns false', function() {
          expect(frame.isAStrike()).toBeFalsy();
        });
      });
      
      it('allows further bowls', function() {
        expect(frame.canBowl()).toBeTruthy();
      });
    });
  });

  describe('firstBowl', function() {
    it('returns null at first', function(){
      expect(frame.firstBowl()).toBeNull();
    });
    it('returns the score of the firstBowl', function() {
      frame.bowl(8);
      expect(frame.firstBowl()).toEqual(8);
    });
  });

  describe('second bowl', function() {
    beforeEach(function() {
      frame.bowl(6);
    });

    it('returns the frame', function() {
      expect(frame.bowl(3)).toEqual(frame);
    });

    describe('is under 0', function() {
      it('throws an error', function() {
        expect(function() {frame.bowl(-1)}).toThrow();
      });
    });

    describe('takes score over 10', function() {
      it('throws an error', function() {
        expect(function() {frame.bowl(5)}).toThrow();
      });
    });

    it('prevents further bowls', function() {
      frame.bowl(3);
      expect(frame.canBowl()).toBeFalsy();
    });

    describe('is a spare', function() {
      beforeEach(function() {
          frame.bowl(4);
      });

      describe('isASpare', function() {
        it('returns true', function() {
          expect(frame.isASpare()).toBeTruthy();
        });
      });

      describe('isAStrike', function() {
        it('returns false', function() {
          expect(frame.isAStrike()).toBeFalsy();
        });
      });
    });

    describe('is not a spare', function() {
      describe('isASpare', function() {
        it('returns false', function() {
          frame.bowl(3);
          expect(frame.isASpare()).toBeFalsy();
        });
      });
    });
  });

  describe('second bowl after a strike', function() {
    beforeEach(function() {
      frame.bowl(10);
    });

    it('thows an error', function() {
      expect(function() {frame.roll(1)}).toThrow();
    });
  });

  describe('secondBowl', function() {
    it('returns null at first', function(){
      expect(frame.secondBowl()).toBeNull();
    });
    it('returns the score of the secondBowl', function() {
      frame.bowl(0).bowl(7);
      expect(frame.secondBowl()).toEqual(7);
    });
  });

  describe('nextFrame', function() {
    it('returns null', function() {
      expect(frame.nextFrame()).toBeNull();
    })
  });

  describe('setNextFrame', function(){
    it('returns the next frame', function() {
      newFrame = new Frame();
      expect(frame.setNextFrame(newFrame)).toEqual(newFrame);
    });

    it('sets the next frame', function() {
      newFrame = new Frame();
      frame.setNextFrame(newFrame);
      expect(frame.nextFrame()).toEqual(newFrame);
    });
  });
});
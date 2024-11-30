const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const authMiddleware = require('../middleware/auth');

// @route   GET /api/courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', ['name', 'email'])
      .sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/courses
router.post('/', authMiddleware, async (req, res) => {
  const { 
    title, 
    description, 
    difficulty, 
    category, 
    duration, 
    price 
  } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      instructor: req.user.id,
      difficulty,
      category,
      duration,
      price
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
import '@testing-library/jest-dom';

// mocking Intersction Observer (react-awesome-reveal dependency)
const observer = () => ({
	observe: jest.fn(),
	disconnect: jest.fn(),
	unobserve: jest.fn(),
});
window.IntersectionObserver = jest.fn().mockImplementation(observer);

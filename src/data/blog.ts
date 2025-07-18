export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  views: number;
  likes: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "cybersecurity-fundamentals-beginners",
    title: "Cybersecurity Fundamentals Every Developer Should Know",
    excerpt: "An introduction to essential cybersecurity concepts that all developers should understand to build more secure applications and protect sensitive data.",
    content: `As a developer in today's digital landscape, understanding cybersecurity fundamentals isn't optional—it's essential. In this article, I'll share key security concepts that every developer should know to build more secure applications.

## The Security Mindset

### Thinking Like an Attacker
To defend your applications effectively, you need to understand how attackers think. This involves:
- Identifying valuable assets in your application
- Recognizing potential entry points
- Considering various attack vectors

### Defense in Depth
Never rely on a single security control. Implementing multiple layers of security ensures that if one layer fails, others are in place to protect your application.

## OWASP Top 10 Awareness

The OWASP Top 10 represents the most critical security risks to web applications. Familiarize yourself with:

### Injection Flaws
Always validate, sanitize, and parameterize user inputs to prevent SQL, NoSQL, OS, and LDAP injection attacks.

### Broken Authentication
Implement strong authentication mechanisms, session management, and password policies to prevent credential stuffing and brute force attacks.

### Sensitive Data Exposure
Encrypt sensitive data both in transit and at rest, and never store sensitive information unnecessarily.

## Secure Coding Practices

### Input Validation
All user input should be treated as untrusted. Implement proper validation on both client and server sides.

### Output Encoding
Always encode output before rendering it to prevent XSS attacks.

### Secure Dependencies
Regularly audit and update your dependencies to address known vulnerabilities.

## Security in the SDLC

Security should be integrated throughout the Software Development Life Cycle:

- **Requirements phase**: Define security requirements
- **Design phase**: Conduct threat modeling
- **Implementation**: Apply secure coding practices
- **Testing**: Perform security testing
- **Deployment**: Secure the infrastructure
- **Maintenance**: Monitor for vulnerabilities

## Conclusion

Security is everyone's responsibility, especially developers. By understanding these fundamental concepts and integrating them into your daily practices, you'll create more secure applications and contribute to a safer digital ecosystem.`,
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Secure Coding", "OWASP", "Web Security"],
    image: "/blog/cybersecurity-fundamentals.jpg",
    author: {
      name: "Saud Aldhafyan",
      avatar: "/avatars/saud.jpg",
      bio: "Full Stack Developer & Cyber Security Professional"
    },
    publishedAt: "2023-12-15",
    readingTime: "8 min read",
    featured: true,
    views: 2845,
    likes: 156
  },
  {
    id: "secure-api-design-best-practices",
    title: "Secure API Design: Best Practices for Modern Applications",
    excerpt: "Learn how to design and implement secure APIs for your web applications with a focus on authentication, authorization, rate limiting, and data validation.",
    content: `APIs are the backbone of modern web applications, but they also represent a significant attack surface. In this guide, I'll share best practices for designing secure APIs based on my experience as both a developer and security professional.

## Authentication & Authorization

### Strong Authentication
Choose the right authentication mechanism for your API:
- **API Keys**: Simple but limited security
- **OAuth 2.0**: Industry standard for authorization
- **JWT**: Compact, self-contained tokens for information exchange

### Proper Authorization
Authentication verifies identity, but authorization controls what authenticated users can access:
- Implement role-based access control (RBAC)
- Follow the principle of least privilege
- Use attribute-based access control for complex permissions

## Input Validation & Output Sanitization

### Comprehensive Validation
All API inputs should be validated for:
- Data type correctness
- Format validation (e.g., email, dates)
- Size limitations
- Business rule compliance

### Schema Validation
Use schema validation libraries like JSON Schema, Joi, or built-in features of frameworks to ensure requests match expected formats.

## Rate Limiting & Resource Protection

### Implement Rate Limiting
Protect your API from abuse by limiting request rates based on:
- IP address
- API key or user ID
- Endpoint sensitivity

### Prevent DoS Attacks
- Set reasonable timeouts
- Limit payload sizes
- Implement circuit breakers for failing services

## Transport Security

### Always Use HTTPS
Never deploy APIs without TLS/SSL protection. Configure properly with:
- Modern TLS versions (1.2+)
- Strong cipher suites
- Valid certificates

### HTTP Security Headers
Implement headers such as:
- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options

## API Documentation & Security Testing

### Secure by Design
Document security requirements and controls in your API specifications using standards like OpenAPI.

### Regular Security Testing
- Conduct penetration testing
- Use automated scanning tools
- Perform fuzz testing on inputs

## Conclusion

Building secure APIs requires attention to detail at every level of the stack. By implementing these best practices, you'll create APIs that are both functional and secure, protecting your users' data and your organization's reputation.`,
    category: "Web Development",
    tags: ["API Security", "Authentication", "OAuth", "JWT"],
    image: "/blog/secure-api-design.jpg",
    author: {
      name: "Saud Aldhafyan",
      avatar: "/avatars/saud.jpg",
      bio: "Full Stack Developer & Cyber Security Professional"
    },
    publishedAt: "2023-11-28",
    readingTime: "10 min read",
    featured: true,
    views: 2156,
    likes: 132
  },
  {
    id: "ethical-hacking-for-developers",
    title: "Ethical Hacking for Developers: Tools and Techniques",
    excerpt: "Discover the essential tools and techniques used in ethical hacking that can help developers identify and fix vulnerabilities in their applications.",
    content: `As a developer with a background in cybersecurity, I've found that understanding ethical hacking techniques has dramatically improved my ability to build secure applications. In this article, I'll introduce key tools and methods that developers can use to think like an attacker.

## Reconnaissance Tools

### Information Gathering
Before attacking a system, hackers gather information. Tools that help with this include:
- **Shodan**: Search engine for internet-connected devices
- **theHarvester**: Gathers emails, subdomains, and more
- **Maltego**: Visualizes relationships between information

### Network Scanning
- **Nmap**: The most versatile port scanner
- **Masscan**: For scanning large networks quickly

## Vulnerability Assessment

### Web Application Scanners
- **OWASP ZAP**: Free, open-source web app scanner
- **Burp Suite**: Industry-standard for web app security testing
- **Nikto**: Web server scanner

### Static Analysis
- **SonarQube**: Code quality and security scanner
- **ESLint/TSLint with security rules**: For JavaScript/TypeScript
- **OWASP Dependency Check**: Identifies vulnerable components

## Exploitation Techniques

### Common Web Vulnerabilities
- **XSS (Cross-Site Scripting)**: Injecting malicious scripts
- **CSRF (Cross-Site Request Forgery)**: Forcing unwanted actions
- **SQL Injection**: Manipulating database queries

### Hands-on Practice
- **OWASP WebGoat**: Deliberately vulnerable application for learning
- **HackTheBox**: Online platform for practicing penetration testing
- **TryHackMe**: Learn cybersecurity through hands-on exercises

## Post-Exploitation

### Privilege Escalation
Understanding how attackers elevate privileges helps you prevent it:
- Misconfigured permissions
- Unpatched software
- Default credentials

### Covering Tracks
Knowing how attackers hide their presence helps with:
- Improving logging and monitoring
- Detecting unusual behavior
- Incident response planning

## Developer-Specific Practices

### Secure Code Reviews
- Use a security checklist
- Implement four-eyes principle
- Focus on high-risk components first

### Building Security Testing into CI/CD
- Automate security scans
- Set security gates before deployment
- Regularly update security tools

## Conclusion

Understanding ethical hacking techniques doesn't turn developers into security experts, but it provides invaluable perspective for building more secure applications. By incorporating these tools and techniques into your development workflow, you'll catch vulnerabilities before attackers do.`,
    category: "Cybersecurity",
    tags: ["Ethical Hacking", "Penetration Testing", "Security Tools", "Vulnerability Assessment"],
    image: "/blog/ethical-hacking.jpg",
    author: {
      name: "Saud Aldhafyan",
      avatar: "/avatars/saud.jpg",
      bio: "Full Stack Developer & Cyber Security Professional"
    },
    publishedAt: "2023-10-15",
    readingTime: "11 min read",
    featured: false,
    views: 1893,
    likes: 105
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    excerpt: "Master advanced TypeScript patterns that will help you build more robust and maintainable enterprise-level applications.",
    content: `TypeScript has evolved into a powerful tool for building large-scale applications. This article covers advanced patterns that enterprise developers should master.

## Generic Constraints and Conditional Types

Advanced type system features that enable more flexible and type-safe code:

### Conditional Types
Learn how to create types that adapt based on conditions.

### Mapped Types
Understand how to transform existing types programmatically.

## Design Patterns in TypeScript

### Decorator Pattern
Implementing decorators for enhanced functionality.

### Factory Pattern
Creating objects without specifying their exact classes.

### Observer Pattern
Implementing reactive programming patterns.

## Error Handling

Robust error handling strategies:

- **Result types**: Using Result<T, E> for explicit error handling
- **Custom error classes**: Creating meaningful error hierarchies
- **Error boundaries**: Implementing error boundaries in React with TypeScript

## Performance Optimization

TypeScript-specific optimizations:

- **Type inference optimization**: Writing types that compile faster
- **Bundle size reduction**: Techniques for smaller production bundles
- **Runtime performance**: Avoiding TypeScript patterns that hurt runtime performance

## Conclusion

Mastering these advanced TypeScript patterns will significantly improve your ability to build robust, maintainable enterprise applications.`,
    category: "Web Development",
    tags: ["TypeScript", "Design Patterns", "Enterprise", "Architecture"],
    image: "/blog/typescript-patterns.jpg",
    author: {
      name: "Saud Aldhafyan",
      avatar: "/avatars/saud.jpg",
      bio: "Full Stack Developer & Cyber Security Professional"
    },
    publishedAt: "2024-01-05",
    readingTime: "12 min read",
    featured: false,
    views: 2103,
    likes: 156
  },
  {
    id: "web3-development-guide",
    title: "Complete Guide to Web3 Development: From Smart Contracts to DApps",
    excerpt: "A comprehensive guide to getting started with Web3 development, covering smart contracts, DApps, and the decentralized ecosystem.",
    content: `Web3 represents the next evolution of the internet. This comprehensive guide will take you from beginner to building your first decentralized application.

## Understanding Web3 Fundamentals

### Blockchain Basics
Understanding the underlying technology that powers Web3.

### Smart Contracts
Self-executing contracts with terms directly written into code.

### Decentralized Applications (DApps)
Applications that run on a decentralized network rather than centralized servers.

## Development Tools and Frameworks

Essential tools for Web3 development:

### Solidity
The primary language for Ethereum smart contract development.

### Hardhat
A development environment for Ethereum software.

### Web3.js / Ethers.js
JavaScript libraries for interacting with the Ethereum blockchain.

## Building Your First DApp

Step-by-step guide to creating a simple DApp:

1. **Setting up the development environment**
2. **Writing smart contracts**
3. **Deploying to testnet**
4. **Building the frontend**
5. **Connecting wallet integration**

## Security Considerations

Security is paramount in Web3 development:

- **Smart contract audits**: Ensuring your contracts are secure
- **Common vulnerabilities**: Reentrancy, overflow, and other attacks
- **Best practices**: Security patterns and practices

## The Future of Web3

Web3 is rapidly evolving with new protocols, tools, and opportunities emerging constantly.`,
    category: "Blockchain",
    tags: ["Web3", "Blockchain", "Solidity", "DApps", "Ethereum"],
    image: "/blog/web3-guide.jpg",
    author: {
      name: "David Kim",
      avatar: "/avatars/david.jpg",
      bio: "Blockchain developer and Web3 enthusiast"
    },
    publishedAt: "2024-01-03",
    readingTime: "15 min read",
    featured: true,
    views: 3200,
    likes: 210
  },
  {
    id: "secure-coding-nodejs",
    title: "Secure Coding Practices for Node.js Applications",
    excerpt: "A comprehensive guide to writing secure Node.js applications, covering common vulnerabilities, dependency management, and security best practices.",
    content: `Node.js has become a staple in modern web development, but its flexibility and large ecosystem can introduce security challenges. In this guide, I'll share practical secure coding practices for Node.js applications based on my experience as both a developer and security trainer.

## Environment and Configuration Security

### Environment Variables

Properly manage sensitive configuration:
- Use \`.env\` files for local development only
- Never commit \`.env\` files to version control
- Use a secrets management solution for production
- Validate environment variables on application startup

### Configuration Validation

- Validate configuration values at startup
- Set secure defaults
- Use a schema validation library like Joi

## Dependency Management

### Package Security

The npm ecosystem presents unique security challenges:
- Regularly run \`npm audit\` and address findings
- Use \`npm ci\` instead of \`npm install\` in CI/CD
- Consider using \`package-lock.json\` or \`npm shrinkwrap\`
- Implement automated dependency scanning in your pipeline

### Minimizing Dependencies

- Evaluate each package before adding it
- Consider the security implications of each dependency
- Look for packages with minimal sub-dependencies
- Use built-in Node.js modules when possible

## Express.js Security

### Security Middleware

Essential middleware for Express applications:
- **helmet**: Sets various HTTP headers for security
- **express-rate-limit**: Prevents brute force attacks
- **express-validator**: Validates and sanitizes input
- **csurf**: Protects against CSRF attacks

### Route Security

- Implement proper input validation for all routes
- Use parameterized queries for database operations
- Implement proper error handling that doesn't leak information

## Authentication and Session Management

### Password Security

- Never store plain text passwords
- Use bcrypt or Argon2 for password hashing
- Implement account lockout after failed attempts
- Enforce strong password policies

### JWT Best Practices

If using JWTs:
- Set appropriate expiration times
- Use strong signing keys
- Validate tokens completely on every request
- Implement token revocation when necessary

## Common Node.js Vulnerabilities

### Preventing Injection Attacks

- Use parameterized queries for SQL
- Validate and sanitize all inputs
- Be cautious with eval() and similar functions
- Use safe alternatives to child_process.exec()

### Preventing DoS Vulnerabilities

- Implement request rate limiting
- Set request size limits
- Use streaming for large files instead of loading into memory
- Implement timeouts for all external operations

## Production Deployment

### Docker Security

If using Docker:
- Use official Node.js images or minimal variants
- Don't run containers as root
- Scan images for vulnerabilities
- Use multi-stage builds to minimize image size

### Process Management

- Use a process manager like PM2
- Implement proper logging and monitoring
- Set up automated restarts for crashed processes
- Configure proper resource limits

## Conclusion

Security is a continuous process that should be integrated into your development workflow. By following these practices, you'll build Node.js applications that are more resilient to attacks and better protect your users' data.`,
    category: "Web Development",
    tags: ["Node.js", "Express", "Backend", "Security"],
    image: "/blog/nodejs-security.jpg",
    author: {
      name: "Saud Aldhafyan",
      avatar: "/avatars/saud.jpg",
      bio: "Full Stack Developer & Cyber Security Professional"
    },
    publishedAt: "2023-08-05",
    readingTime: "12 min read",
    featured: false,
    views: 1756,
    likes: 94
  }
];

export const featuredPosts = blogPosts.filter(post => post.featured);

export const blogCategories = [
  "All",
  "Web Development",
  "Cybersecurity",
  "DevOps",
  "UI/UX Design"
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

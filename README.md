# BASE: Advanced Base Layout Analyzer

```
      # ###        ##### /      ###          ##       ##### /    ##   
    /  /###  /  ######  /      /####       ####  / ######  /  #####   
   /  /  ###/  /#   /  /      /   ###      /####/ /#   /  /     ##### 
  /  ##   ##  /    /  /            ###    /   ## /    /  ##     # ##  
 /  ###           /  /              ###  /           /  ###     #     
##   ##          ## ##               ###/           ##   ##     #     
##   ##   ###    ## ##                ###           ##   ##     #     
##   ##  /###  / ## ##                /###          ##   ##     #     
##   ## /  ###/  ## ##               /  ###         ##   ##     #     
##   ##/    ##   ## ##              /    ###        ##   ##     #     
 ##  ##     #    #  ##             /      ###        ##  ##     #     
  ## #      /       /             /        ###        ## #      #     
   ###     /    /##/           / /          ###   /    ###      #     
    ######/    /  ############/ /            ####/      #########     
      ###     /     #########  /              ###         #### ###    
              #                                                 ###   
               ##                                   ########     ###  
                                                  /############  /#   
                                                 /           ###/     
```

BASE (Base Layout Analyzer) is a cutting-edge tool that revolutionizes base design analysis. It allows users to upload images, PDFs, or Word documents containing base layouts or maps. The backend, powered by AI fine-tuned on base design best practices, generates a Course of Action (COA) based on the uploaded layout. Users can then engage in interactive chat sessions with AI agents to discuss and refine the analysis.

## Key Features

- Multi-format upload support (images, PDFs, Word documents)
- AI-powered base layout analysis
- Automated COA generation based on design best practices
- Interactive chat interface with AI agents
- Secure backend with API key management

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/base-project.git
   ```

2. Set up a virtual environment and install dependencies:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r src/glxy7/requirements.txt
   ```

3. Install frontend dependencies:
   ```
   cd src
   npm install
   cd ..
   ```

4. Create a `.env` file in the project root with the following content:
   ```
   SECRET_KEY=your_secret_key_here
   AGENT_CONFIG=your_agent_config_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Run the application in development mode:
   ```
   python run_dev.py
   ```

   This will start both the frontend and backend servers in development mode.

6. Open your browser and navigate to `http://localhost:3000` to use the application.

Note: The backend uses obfuscated code for intellectual property protection. The functionality remains the same.

## Usage

1. Upload your base layout or map (image, PDF, or Word document).
2. The system will analyze the layout and generate a COA.
3. Engage in a chat conversation with AI agents to discuss the analysis and refine strategies.

## Contributing

We welcome contributions to the BASE project. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to get started.

## License

This project is licensed under the [INSERT LICENSE NAME] - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For any questions or support, please open an issue on this repository or contact the maintainers directly.

---

BASE - Empowering strategic base design through advanced AI analysis.
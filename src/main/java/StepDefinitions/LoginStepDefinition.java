package StepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import io.cucumber.java.en.*;

public class LoginStepDefinition 
{
	public static WebDriver driver;
	public Properties prop;
	
	
	@FindBy(xpath="//span[@id='dynamicFieldLogin']//input")
	WebElement username;
	
	@FindBy(xpath="//span[@id='dynamicFieldPasswd']//input")
	WebElement password;
	
	@FindBy(xpath="//button[contains(text(),'Sign In')]")
	WebElement SignIn_Button;

	@FindBy(xpath="//img[contains(@src,'MyELT')]")
	WebElement Logo;
	
	public LoginStepDefinition() throws Exception
	{
	prop = new Properties();
	FileInputStream fin = new FileInputStream("C:\\Users\\Anmol Aggarwal\\eclipse-workspace\\NaveenAutomationLabs\\AutomationUsingCucumber\\src\\main\\java\\Resources\\config.properties");; 
	prop.load(fin);
	PageFactory.initElements(driver, this);
	}
	
	@Given("^User is already on Login Page$")
	public void User_On_Login_Page() throws Exception
	{
		System.setProperty("webdriver.chrome.driver", "D:\\SeleniumDrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(prop.getProperty("URL"));		
		driver.manage().window().maximize();
	}
	
	@When("^User enters Username \"(.*)\" and Password \"(.*)\"$")
	public void user_enters_Username_and_Password(String uname,String passwd) 
	{
	  
		driver.findElement(By.xpath("//span[@id='dynamicFieldLogin']//input")).sendKeys(uname);
		driver.findElement(By.xpath("//span[@id='dynamicFieldPasswd']//input")).sendKeys(passwd);
	}

	@Then("^User clicks on LoginButton$")
	public void user_clicks_on_LoginButton() 
	{
	   driver.findElement(By.xpath("//button[contains(text(),'Sign In')]")).click();
	}

	@Then("^User is on HomePage$")
	public void user_is_on_HomePage()
	{
	 Assert.assertEquals("Titles does not match","MyELT | Online English Language Learning | Home",driver.getTitle());    
	}
	
	
}

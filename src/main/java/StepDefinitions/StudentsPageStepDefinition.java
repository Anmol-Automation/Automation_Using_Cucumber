package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.*;

public class StudentsPageStepDefinition 
{
	WebDriver driver = LoginStepDefinition.driver;

	@Then("^User clicks on Students Tab$")
	public void ClickOnStudent_Tab()
	{
		driver.findElement(By.xpath("//span[contains(text(),'Students')]")).click();
	}
	
    @Then("^User clicks on Create_Student_Account Tab$")
    public void ClickOnCreateStudentAccount_Tab()
    {
    	try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	driver.findElement(By.xpath("//a[contains(text(),'Create Student Account')]")).click();
    }
    
    @Then("^User enters \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
    public void User_Enter_Details(String uname,String fname,String middlename,String lastname ,String password,String email)
    {
    	try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	Select s = new Select(driver.findElement(By.id("userType")));
    	s.selectByValue("2"); 
    	driver.findElement(By.xpath("//input[contains(@id,'userName')]")).sendKeys(uname);
    	driver.findElement(By.xpath("//input[contains(@id,'firstName')]")).sendKeys(fname);
    	driver.findElement(By.xpath("//input[contains(@id,'middle')]")).sendKeys(middlename);
    	driver.findElement(By.xpath("//input[contains(@id,'lastName')]")).sendKeys(lastname);
    	driver.findElement(By.xpath("//span[contains(text(),'Minimum')]//..//input[contains(@id,'password')]")).sendKeys(password);
    	driver.findElement(By.xpath("//span[contains(text(),'mismatch')]//..//input[contains(@id,'password')]")).sendKeys(password);
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.id("email2")).sendKeys(email);
    	driver.findElement(By.xpath("//a[contains(text(),'Add user')]")).click();   	
    }
}

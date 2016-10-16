using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using DataAccess;
using ViewModel;

namespace Manager
{
    public class AuthenticationManager : IAuthenticationService, IDisposable
    {
        public AuthenticationManager(DbContext context)
        {
            this.Db = context as VirtualtraineesEntities;
        }

        public VirtualtraineesEntities Db { get; set; }

        public ResponseModel Signup(SignupModel model)
        {
            ResponseModel responseModel;
            var email = model.Email.ToUpper();

            var trainee = Db.Trainees.FirstOrDefault(x => x.Email.ToUpper() == email);
            if (trainee == null)
            {
                Trainee entity = model.GetTrainee();
                Db.Trainees.Add(entity);
                 Db.SaveChanges();
                entity.Password = "";
                responseModel = new ResponseModel(new TraineeViewModel(entity));
            }
            else
            {
                responseModel = new ResponseModel(isSuccess: false, message: MessageContainer.EmailExists);
            }
            return responseModel;
        }

        public async Task<ResponseModel> Signin(SigninModel model)
        {
            ResponseModel responseModel;
            var email = model.Email.ToUpper();

            var trainee =
                await
                    Db.Trainees.FirstOrDefaultAsync(
                        x => x.Email.ToUpper() == email);
            if (trainee != null)
            {
                if (trainee.Password == model.Password.CalculateMd5Hash())
                {
                    trainee.Token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
                    trainee.Changed = DateTime.Now;
                    await Db.SaveChangesAsync();
                    responseModel = new ResponseModel(new TraineeViewModel(trainee),true,MessageContainer.Greetings+trainee.Name);

                    if (!trainee.IsActive)
                    {
                        responseModel.Message = MessageContainer.DeactivatedNotification;
                    }
                    else
                    {
                        if (trainee.Expired < DateTime.Now)
                        {
                            trainee.IsActive = false;
                            await Db.SaveChangesAsync();
                            responseModel.Message = MessageContainer.DeactivatedNotification;
                        }
                    }

                }
                else
                {
                    responseModel = new ResponseModel(message: MessageContainer.EmailPasswordMismatch, isSuccess: false);
                }
                
            }
            else
            {
                responseModel = new ResponseModel(isSuccess: false, message: MessageContainer.NoUserFound);
            }
            return responseModel;
        }


        public bool IsAuthenticated(Guid traineeId, string token)
        {       
            return Db.Trainees.FirstOrDefault(x => x.Id == traineeId && x.Token == token) != null;
        }

        public void Dispose()
        {
            
        }
    }

    public interface IAuthenticationService
    {
        //Task<ResponseModel> Signup(SignupModel model);
        Task<ResponseModel> Signin(SigninModel model);
        ResponseModel Signup(SignupModel model);
        //ResponseModel Signin(SigninModel model);
    }

   
}
